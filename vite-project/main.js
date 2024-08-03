import './style.css'  

import Splide from '@splidejs/splide';

// デフォルトのテーマ
import '@splidejs/splide/css';

// または、そのほかのテーマ
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

// あるいは、コアスタイルのみ
import '@splidejs/splide/css/core';



new Splide( '.splide',{
  type   : 'loop',
} ).mount();