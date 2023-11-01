interface Color {
  name: string;
  kr: string;
  background: string;
}

const ColorPalette: Color[] = [
  { name: 'red', kr: '빨강', background: '#FFA7A7' },
  { name: 'orange', kr: '주황', background: '#FFA7A7' },
  { name: 'yellow', kr: '노랑', background: '#FDFF9E' },
  { name: 'green', kr: '초록', background: '#A0FF90' },
  { name: 'blue', kr: '파랑', background: '#BEADFF' },
  { name: 'purple', kr: '보라', background: '#D09AD9' },
  { name: 'pink', kr: '핑크', background: '#FF98D6' },
  { name: 'khaki', kr: '카키', background: '#C0AE6F' },
  { name: 'black', kr: '검정', background: '#131313' },
  { name: 'white', kr: '하양', background: '#FFF' },
  { name: 'grey', kr: '회색', background: '#E2E2E2' },
  {
    name: 'multi',
    kr: '혼합',
    background: 'linear-gradient(180deg, #F19494 0%, #FFFCBC 51.56%, #22D7FF 86.98%, #DF18FF 100%)',
  },
];

export default ColorPalette;
