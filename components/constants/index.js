import { faStar ,faPizzaSlice ,faFlag} from '@fortawesome/free-solid-svg-icons'
export const categoriesList =[
    {
      id:1,
      label:'Dish',
      value:'dish',
      iconValue:faPizzaSlice,
      color:'red'

    },
    {
      id:2,
      label:'Places',
      value:'place',
      iconValue:faFlag,
      color:'yellow'

    },
   
   
  ]
export const ratingList =[
  {
    id:1,
    label:'1',
    value:'1',
    iconValue:faStar,
    color:'yellow'
  },
  {
    id:2,
    label:'2',
    value:'2',
    iconValue:faStar,
    color:'yellow'
  },
  {
    id:4,
    label:'3',
    value:'3',
    iconValue:faStar,
    color:'yellow'
  },
  {
    id:5,
    label:'4',
    value:'4',
    iconValue:faStar,
    color:'yellow'
  },
  {
    id:6,
    label:'5',
    value:'5',
    iconValue:faStar,
    color:'yellow'
  },
  
]
export const dataList =[
  {
    id:1,
    title:'A',
    serviceTime: '45-60min',
    deliveryFee:5.44,
    category:'place',
    cuisine:'Turky',
    rating:5,
       iconValue:faStar,
    price:2500,
    coverSrc: require('../../assets/img/download.png')
  },
  {
    id:2,
    title:'B',
    serviceTime: '45-60min',
    deliveryFee:4.44,
    category:'dish',
    cuisine:'american',
    rating:5,
       iconValue:faStar,
    price:2500,
    coverSrc: require('../../assets/img/download.png')
  },
  {
    id:3,
    title:'C',
    serviceTime: '45-60min',
    deliveryFee:2.44,
    category:'place',
    cuisine:'american',
    rating:4,
       iconValue:faStar,
    price:1000,
    coverSrc: require('../../assets/img/download.png')
  },
  {
    id:4,
    title:'D',
    serviceTime: '45-60min',
    deliveryFee:3.44,
    category:'dish',
    cuisine:'american',
    rating:3,
       iconValue:faStar,
    price:4000,
    coverSrc: require('../../assets/img/download.png')
  },
  {
    id:5,
    title:'E',
    serviceTime: '45-60min',
    deliveryFee:3.34,
    category:'place',
    cuisine:'american',
    rating:2,
    iconValue:faStar,
    price:3000,
    coverSrc: require('../../assets/img/download.png')
  },
 
  {
    id:6,
    title:'F',
    serviceTime: '50-60min',
    deliveryFee:1.44,
    category:'dish',
    cuisine:'austlia',
    rating:1,
    iconValue:faStar,
    price:1500,
    coverSrc: require('../../assets/img/download.png')
  },
]