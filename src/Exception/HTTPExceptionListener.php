<?php

namespace App\Exception;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpException;

final class HTTPExceptionListener
{


  public function onKernelException(ExceptionEvent $event): void
  {


    $exception = $event->getException();
    if (!($exception instanceof HttpException) || strpos($event->getRequest()->getRequestUri(), '/api/') === false) {
      return;
    }

    $response = new JsonResponse(['error' => $exception->getMessage()]);
    $response->setStatusCode($exception->getStatusCode());
    $event->setResponse($response);
  }

}