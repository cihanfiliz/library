<?php

namespace App\Repository;

use App\Entity\Book;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Book>
 *
 * @method Book|null find($id, $lockMode = null, $lockVersion = null)
 * @method Book|null findOneBy(array $criteria, array $orderBy = null)
 * @method Book[]    findAll()
 * @method Book[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Book::class);
    }

    /**
     * Find books by title and author.
     *
     * @param string|null $title
     * @param string|null $author
     * @return Book[]
     */
    public function findByTitleAndAuthor(?string $title, ?string $author): array
    {
        $queryBuilder = $this->createQueryBuilder('b');

        if ($title) {
            $queryBuilder->andWhere('b.title LIKE :title')
                         ->setParameter('title', '%' . $title . '%');
        }

        if ($author) {
            $queryBuilder->andWhere('b.author LIKE :author')
                         ->setParameter('author', '%' . $author . '%');
        }

        return $queryBuilder->getQuery()->getResult();
    }
}
