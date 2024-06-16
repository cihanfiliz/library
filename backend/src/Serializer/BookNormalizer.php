<?php
namespace App\Serializer;

use App\Entity\Book;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class BookNormalizer implements NormalizerInterface
{
    public function normalize($object, string $format = null, array $context = [])
    {
        return [
            'id' => $object->getId(),
            'title' => $object->getTitle(),
            'author' => $object->getAuthor(),
            'publish_year' => $object->getPublishYear(),
        ];
    }

    public function supportsNormalization($data, string $format = null): bool
    {
        return $data instanceof Book;
    }
}
?>