import tour1 from  './images/tour-1.jpeg'
import tour2 from  './images/tour-2.jpeg'
import tour3 from  './images/tour-3.jpeg'
import tour4 from  './images/tour-4.jpeg'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#services',
    text: 'services',
  },
  {
    id: 4,
    href: '#tours',
    text: 'tours',
  },
]

export const socialLinks = [
 {id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook'},
 {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
 {id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace'},
]

export const services = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.' },
]

export const tours = [
  { id: 1, name: 'Tibet Adventure', date: 'august 26th, 2020', days: 6, price: 2100, image: tour1, country: 'china', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' },
  { id: 2, name: 'best of java', date: 'october 1th, 2020', days: 11, price: 1400, image: tour2, country: 'indonesia', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' },
  { id: 3, name: 'tanzania wildlife', date: 'september 14th, 2020', days: 8, price: 2400, image: tour3, country: 'tanzania', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' },
  { id: 4, name: 'kenya safari', date: 'december 1th, 2020', days: 12, price: 3200, image: tour4, country: 'kenya', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.' },
]