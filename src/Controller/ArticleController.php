<?php

namespace App\Controller;

use App\Entity\Article;
use Doctrine\ORM\EntityManagerInterface;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Rest\Route("/api")
 */
class ArticleController extends AbstractController
{
  public $em;
  public $serializer;

  public function __construct(EntityManagerInterface $em,SerializerInterface $serializer)
  {
    $this->em = $em;
    $this->serializer = $serializer;
  }

    /**
     * @Rest\Get("/articles",name="findAllArticle")
     */
    public function findAllAction(): JsonResponse
    {
        $articles = $this->em->getRepository(Article::class)->findBy([],['id' => 'DESC']);
        $data = $this->serializer->serialize($articles,JsonEncoder::FORMAT);

        return new JsonResponse($data,Response::HTTP_OK,[],true);
    }

    /**
     * @Rest\Get("/article/{id}",name="findArticle", requirements = { "id" = "\d+" })
     */
    public function findArticle(Article $article) {

      $data = $this->serializer->serialize($article,JsonEncoder::FORMAT);

      return new JsonResponse($data,Response::HTTP_OK,[],true);

    }
}
