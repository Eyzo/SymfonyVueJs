<?php
declare(strict_types=1);

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use DateTime;
use Exception;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity
 * @ORM\Table(name="posts")
 * @ORM\HasLifecycleCallbacks
 */
class Post
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(name="message",type="string")
     *
     * @var string
     */
    private $message;

    /**
     * @ORM\Column(name="created",type="datetime")
     *
     * @var DateTime
     */
    private $created;

    /**
     * @ORM\Column(name="updated",type="datetime",nullable=true)
     *
     * @var DateTime|null
     */
    private $updated;


  /**
   * @ORM\PreUpdate
   */
  public function onPreUpdate(): void
  {
    $this->updated = new DateTime('NOW');
  }

  /**
   * @ORM\PreFlush
   */
  public function onPreFlush(): void
  {
    $this->created = new DateTime('NOW');
  }

    public function getId(): ?int
    {
      return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getCreated(): DateTime
    {
        return $this->created;
    }

    public function getUpdated(): ?DateTime
    {
        return $this->updated;
    }

}
