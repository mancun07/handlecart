import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyProducts = [
  {id: 'm1', title: 'Суши Филадельфия', price: 10, description: 'Возможно лучшие суши в мире'},
  {id: 'm2', title: 'Суши калифорния', price: 20, description: 'Тоже неплохие суши'},

]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Выбирайте Ваши любимые суши</h2>
      <ul>
        {dummyProducts.map(el => {
          return <ProductItem
          key={el.id}
          id={el.id}
          title={el.title}
          price={el.price}
          description={el.description}
        />
        })}
      </ul>
    </section>
  );
};

export default Products;
