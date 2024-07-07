import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '€56',
    tags: 'AU | Bouteille',
  },
  {
    title: 'Catena Malbec',
    price: '€59',
    tags: 'AU | Bouteille',
  },
  {
    title: 'La Vieille Rose',
    price: '€44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '€31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '€26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Spritz',
    price: '€20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '€16',
    tags: 'Rhum brun | Bière au gingembre | Tranche de citron vert',
  },
  {
    title: 'Daiquiri',
    price: '€10',
    tags: 'Rhum | Jus de citron | Sucre',
  },
  {
    title: 'Old Fashioned',
    price: '€31',
    tags: 'Bourbon | Sucre brun | Bitters Angostura',
  },
  {
    title: 'Negroni',
    price: '€26',
    tags: 'Gin | Vermouth doux | Campari | Garniture d\'orange',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmand',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Étoile Montante',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'Hospitalité AA',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef Exceptionnel',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
