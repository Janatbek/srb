import Product from './product.type';
import { plainToClass } from 'class-transformer';

export function createProductSamples() {
  return plainToClass(Product, [
    {
      id: 1,
      // title: 'Strawberry',
      title: 'Manty',
      // slug: 'strawbery',
      slug: 'manty',
      unit: '5 pc',
      price: 5,
      salePrice: 2.5,
      discountInPercent: 50,
      description:
        'The garden strawberry is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit. The fruit is widely appreciated for its characteristic aroma, bright red color, juicy texture, and sweetness.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 2,
      title: 'Blueberries',
      slug: 'blueberry',
      unit: '1 lb',
      price: 8,
      salePrice: 7.2,
      discountInPercent: 10,
      description:
        'Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries. Commercial blueberries—both wild and cultivated —are all native to North America.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 3,
      title: 'Clementines',
      slug: 'clementines',
      unit: '2 lb',
      price: 3,
      salePrice: 0,
      discountInPercent: 0,
      description:
        ' clementine is a tangor, a citrus fruit hybrid between a willowleaf mandarin orange and a sweet orange, named for its late 19th-century discoverer. The exterior is a deep orange colour with a smooth, glossy appearance. ',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 4,
      title: 'Apples',
      slug: 'apples',
      unit: '2 lb',
      price: 2,
      salePrice: 1.6,
      discountInPercent: 20,
      description:
        'An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found. ',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 5,
      title: 'Pears',
      slug: 'pear',
      unit: '1 lb',
      price: 2,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 6,
      title: 'Mango',
      slug: 'mango',
      unit: '2 lb',
      price: 2.5,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'A mango is a juicy stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 7,
      title: 'Dates',
      slug: 'dates',
      unit: '2 lb',
      price: 15,
      salePrice: 12,
      discountInPercent: 20,
      description:
        'Phoenix dactylifera, commonly known as date or date palm, is a flowering plant species in the palm family, Arecaceae, cultivated for its edible sweet fruit.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 2,
          title: 'Fruits',
          slug: 'fruits',
        },
      ],
    },
    {
      id: 8,
      title: 'lime',
      slug: 'lime',
      unit: '12 pc(s)',
      price: 1.5,
      salePrice: 0,
      discountInPercent: 0,
      description:
        'The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.',
      type: 'grocery',
      image:
        'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
      gallery: [
        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        },

        {
          url:
            'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        },
      ],
      categories: [
        {
          id: 1,
          title: 'Fruits Vegetables',
          slug: 'fruits-and-vegetables',
        },
        {
          id: 3,
          title: 'Vegetables',
          slug: 'vegetables',
        },
      ],
    }
  ]);
}
