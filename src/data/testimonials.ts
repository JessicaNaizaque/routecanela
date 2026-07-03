export interface Testimonial {
  name: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Emma King',
    avatar: '/assets/img/testimonials/emmak.jpg',
    text: '"A beautiful way to explore Berlin."',
  },
  {
    name: 'Maria Wenke',
    avatar: '/assets/img/testimonials/mariaw.jpg',
    text: '"My favourite weekend activity."',
  },
  {
    name: 'Thomas Gron',
    avatar: '/assets/img/testimonials/thomasg.jpg',
    text: '"Routes are well thought out and fun."',
  },
  {
    name: 'Sophie Langer',
    avatar: '/assets/img/testimonials/sophiel.jpg',
    text: '"I discovered hidden gems I never knew existed."',
  },
  {
    name: 'Gustav Stahn',
    avatar: '/assets/img/testimonials/gustavs.jpg',
    text: '"Perfect for the whole family."',
  },
  {
    name: 'Pablo Ruiz',
    avatar: '/assets/img/testimonials/pablor.jpg',
    text: '"Como berlinés de adopción, esto es mágico."',
  },
  {
    name: 'Sara Haliba',
    avatar: '/assets/img/testimonials/sarah.jpg',
    text: '"Beautifully curated and easy to follow."',
  },
];
