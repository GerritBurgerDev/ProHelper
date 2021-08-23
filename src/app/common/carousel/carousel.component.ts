import {Component, Renderer2} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ph-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  cards = [
    {
      id: 0,
      cardImageUrl: 'assets/images/carousel-images/Pokemon-Banner.jpg',
      cardTitle: 'General Pokemon Things',
      cardDescription: 'ProHelper also provides easy accessible information about Pokemon things in general. This information includes (but is not limited to) a PokeDex, items information, etc.',
      cardButtons: [
        {
          text: 'Our Services',
          link: '/services'
        }
      ]
    },
    {
      id: 1,
      cardImageUrl: 'assets/images/carousel-images/PRO-Banner.jpg',
      cardTitle: 'Pokemon Revolution Online',
      cardDescription: 'PRO is a MMO-RPG that offers players the chances to explore the regions of Kanto, Johto, Hoenn, Sinnoh, Sevii Islands and more! It boasts pokemon from all of the generations. This MMO has PVP, PVE and many Custom Events with a community of over 10, 000 active players each day!',
      cardButtons: [
        {
          text: 'Website',
          link: 'https://pokemonrevolution.net/'
        },
        {
          text: 'Our Services',
          link: ''
        }
      ]
    },
    {
      id: 2,
      cardImageUrl: 'assets/images/carousel-images/pokemon_fanart_destiny_2.jpg',
      cardTitle: 'Add Your Platform',
      cardDescription: 'Want to have your game/platform added to ProHelper? Get in touch to find out more!',
      cardButtons: [
        {
          text: 'Contact Us',
          link: '/contact-us'
        }
      ]
    },
    {
      id: 3,
      cardImageUrl: 'assets/images/carousel-images/ProHelper.png',
      cardTitle: 'More About Us',
      cardDescription: 'ProHelper is a web application originally developed to aid players of the famous Pokemon Revolution Online MMO RPG. Find out even more by clicking the button below!',
      cardButtons: [
        {
          text: 'About Us',
          link: '/about-us'
        }
      ]
    },
    // {
    //   id: 4,
    //   cardImageUrl: 'assets/images/carousel-images/download.jfif',
    //   cardTitle: 'Card 5',
    //   cardDescription: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    //   cardButtons: []
    // },
    // {
    //   id: 5,
    //   cardImageUrl: 'assets/images/carousel-images/download (1).jfif',
    //   cardTitle: 'Card 6',
    //   cardDescription: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    //   cardButtons: []
    // }
  ]

  leftCard: any;
  centerCard: any;
  rightCard: any;
  selectedCardId: number = 1;

  constructor(private route: Router) {
    this.setDefaultState();
  }

  setDefaultState() {
    this.leftCard = this.cards[0];
    this.centerCard = this.cards[1];
    this.rightCard = this.cards[2];
  }

  clickLeft() {
    if (this.selectedCardId === 0) {
      this.selectedCardId = this.cards.length - 1;

      this.leftCard = this.cards[this.selectedCardId - 1];
      this.centerCard = this.cards[this.selectedCardId];
      this.rightCard = this.cards[0];
    } else {
      this.selectedCardId -= 1;

      if (this.selectedCardId === 0) {
        this.leftCard = this.cards[this.cards.length - 1];
        this.centerCard = this.cards[this.selectedCardId];
        this.rightCard = this.cards[this.selectedCardId + 1];
      } else {
        this.leftCard = this.cards[this.selectedCardId - 1];
        this.centerCard = this.cards[this.selectedCardId];
        this.rightCard = this.cards[this.selectedCardId + 1];
      }
    }
  }

  clickRight() {
    if (this.selectedCardId === this.cards.length - 1) {
      this.selectedCardId = 0;

      this.leftCard = this.cards[this.cards.length - 1];
      this.centerCard = this.cards[this.selectedCardId];
      this.rightCard = this.cards[this.selectedCardId + 1];
    } else {
      this.selectedCardId += 1;

      if (this.selectedCardId === this.cards.length - 1) {
        this.leftCard = this.cards[this.selectedCardId - 1];
        this.centerCard = this.cards[this.selectedCardId];
        this.rightCard = this.cards[0];
      } else {
        this.leftCard = this.cards[this.selectedCardId - 1];
        this.centerCard = this.cards[this.selectedCardId];
        this.rightCard = this.cards[this.selectedCardId + 1];
      }
    }
  }

  navigate(text: string, link: string) {
    if (text === 'Our Services') {
      this.route.navigate(['/services']);
    } else if (text === 'Contact Us') {
      this.route.navigate(['/contact-us']);
    } else if (text === 'About Us') {
      this.route.navigate(['/about-us']);
    } else {
      window.open(link, '_blank');
    }
  }
}
