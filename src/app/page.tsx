import styles from '../styles/home.module.scss';

import CategoryLink from "@/components/CategoryLink/CategoryLink";

import ActionIcon from '../images/category-icons/actions.svg';
import PizzaIcon from '../images/category-icons/pizza.svg';
import SushiIcon from '../images/category-icons/sushi.svg';
import DrikIcon from '../images/category-icons/drinks.svg';
import SnackIcon from '../images/category-icons/snacks.svg';
import ComboIcon from '../images/category-icons/combo.svg';
import DessertIcon from '../images/category-icons/desserts.svg';
import SauseIcon from '../images/category-icons/pizza.svg';

const categoryNav = [
  {id: 1, name: "Акции", icon: ActionIcon, href: "/actions"},
  {id: 2, name: "Пицца", icon: PizzaIcon, href: "/pizza"},
  {id: 3, name: "Суши", icon: SushiIcon, href: "/sushi"},
  {id: 4, name: "Напитки", icon: DrikIcon, href: "/drinks"},
  {id: 5, name: "Закуски", icon: SnackIcon, href: "/snacks"},
  {id: 6, name: "Комбо", icon: ComboIcon, href: "/combo"},
  {id: 7, name: "Десерты", icon: DessertIcon, href: "/desserts"},
  {id: 8, name: "Соусы", icon: SauseIcon, href: "/sauces"},
];

const Home = () => {
  return (
    <main className='home'>
      <div className="wrapper">
        <div className="container">
          <nav className={styles.categoryNav}>
            {categoryNav.map((el) => (
              <CategoryLink {...el} key={el.id}/>
            ))}
          </nav>
        </div>
      </div>
    </main>
  )
};

export default Home;
