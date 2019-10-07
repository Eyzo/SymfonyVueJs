<?php

namespace App\DataFixtures;

use App\Entity\Article;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class ArticleFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {

      $faker = \Faker\Factory::create('fr_FR');


      for ($i = 0;$i < 20;$i++) {

        $article = new Article();
        $article->setName($faker->name);
        $article->setSlug($faker->slug);
        $article->setDescription($faker->paragraph);
        $article->setImg($faker->imageUrl());
        $article->setCreatedAt(new \DateTime('now'));

        $manager->persist($article);
      }

        $manager->flush();
    }
}
