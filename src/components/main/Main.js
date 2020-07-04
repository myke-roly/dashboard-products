import React from 'react';
import './styles.scss';

const Main = () => {
  return (
    <main className="main">
      <h2 className="main__title">ADMINISTRADOR DE PRODUCTOS</h2>
      <div className="main__wrapper">
        <ul className="main__items">
          <li className="items--item">
            <input type="checkbox" className="item--check" />
            <h2 className="item--title">Title</h2>
            <p className="item--status">ok</p>
            <p className="item--price">$ precio</p>
            <section className="item--admin">
              <button className="btn item--edit">Editar</button>
              <button className="btn item--delete">Borrar</button>
            </section>
          </li>
					<li className="items--item">
					<input type="checkbox" className="item--check" />
            <h2 className="item--title">Title</h2>
            <p className="item--status">ok</p>
            <p className="item--price">$ precio</p>
            <section className="item--admin">
              <button className="btn item--edit">Editar</button>
              <button className="btn item--delete">Borrar</button>
            </section>
          </li>
					<li className="items--item">
						<input type="checkbox" className="item--check" />
            <h2 className="item--title">Title</h2>
            <p className="item--status">ok</p>
            <p className="item--price">$ precio</p>
            <section className="item--admin">
              <button className="btn item--edit">Editar</button>
              <button className="btn item--delete">Borrar</button>
            </section>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Main;
