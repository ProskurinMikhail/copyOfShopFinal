import React, { useState } from 'react';
import './Body.css';
import data from './Data';
<link href="https://fonts.googleapis.com/css?family=Montserrat:700" rel="stylesheet"></link>
const dataA = data.earphones;
const dataB = data.whireless;
let cart = [];
let setCart = () => {};
let addToCart = () => {};
const BodyA = () =>
{
    [cart, setCart] = useState(cart);
    addToCart = (el) => {
        setCart([...cart, el]);
        localStorage.setItem('total.price', Number(localStorage.getItem('total.price'))+el.price);
        localStorage.setItem('total.count', Number(localStorage.getItem('total.count'))+1);
    }
    return(
        <div className='body-earphones'>
            <div></div>
            <div className='show-item'>
                <div className='pic'><img src = {dataA[0].image} width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataA[0].name}</div> 
                <div className='price'>{dataA[0].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataA[0].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataA[0])}></input></div>
            </div>
            <div className='show-item'>
                <div className='pic'><img src = {dataA[1].image}width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataA[1].name}</div>
                <div className='price'>{dataA[1].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataA[1].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataA[1])}></input></div>
            </div>
            <div className='show-item'>
                <div className='pic'><img src = {dataA[2].image}width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataA[2].name}</div>
                <div className='price'>{dataA[2].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataA[2].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataA[2])}></input></div>
            </div>
            <div></div>
        </div>
    )
}

const BodyB = () =>
{
    [cart, setCart] = useState(cart);
    addToCart = (el) => {
        setCart([...cart, el]);
        localStorage.setItem('total.price', Number(localStorage.getItem('total.price'))+el.price);
        localStorage.setItem('total.count', Number(localStorage.getItem('total.count'))+1);
        console.log(cart);
    }
    return(
        <div className='body-wireless'>
            <div></div>
            <div className='show-item'>
                <div className='pic'><img src = {dataB[0].image} width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataB[0].name}</div>
                <div className='price'>{dataB[0].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataB[0].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataA[0])}></input></div>
            </div>
            <div className='show-item'>
                <div className='pic'><img src = {dataB[1].image}width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataB[1].name}</div>
                <div className='price'>{dataB[1].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataB[1].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataB[1])}></input></div>
            </div>
            <div className='show-item'>
                <div className='pic'><img src = {dataB[2].image}width='240' height='240' alt = ''></img></div>
                <div className='name'>{dataB[2].name}</div>
                <div className='price'>{dataB[2].price} ₽</div>
                <div className='rating'><img src = './pictures/Star.svg' width='22' height='22' alt = ''></img>{dataB[2].rating}</div>
                <div className='buy'><input type='submit' value='Купить' onClick={()=>addToCart(dataB[2])}></input></div>
            </div>
            <div></div>
        </div>
    )
}

const HminiA = () =>
{
    return(<h1 className='hmini'>Наушники</h1>)
}

const HminiB = () =>
{
    return(<h1 className='hmini'>Беспроводные наушники</h1>)
}

const megaReload = () =>{
    localStorage.clear();
    cart=[];
    window.location.reload();
}

const HminiC = () =>
{
    return( 
        <div>
            <h1 className='hmini'>
                <input type='submit' value='Корзина' onClick={()=>window.location.reload()}></input> --- нажми сюда, чтобы обновить информацию о корзине 
            </h1>
            <h1 className='hmini'> Общая сумма = {Number(localStorage.getItem('total.price'))} ₽ </h1> 
            <h1 className='hmini'> Элементов в корзине = {Number(localStorage.getItem('total.count'))} </h1> 
            <h1 className='hmini'>
                <input type='submit' value='Кнопка, чтобы удалить все из корзины' onClick={()=>megaReload()}></input>
            </h1>       
            <div></div>
            <div></div> 
        </div>
    )

}

export  {BodyA, BodyB, HminiA, HminiB, HminiC};

