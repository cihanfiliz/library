<?php

namespace App\Controller;

use App\Entity\Book;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends AbstractController
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
        
    }

    /**
     * @Route("/api/books", name="get_books", methods={"GET"})
    */
    public function getBooks(): JsonResponse
    {
        $books = $this->entityManager->getRepository(Book::class)->findAll();
        return $this->json($books);
    }

    /**
     * @Route("/api/books/search", name="search_books", methods={"GET"})
     */
    public function searchBooks(Request $request): JsonResponse
    {
        $title = $request->query->get('title', '');
        $author = $request->query->get('author', '');

        $books = $this->entityManager->getRepository(Book::class)->findByTitleAndAuthor($title, $author);

        return $this->json($books);
    }
}

