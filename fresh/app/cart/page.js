export default function Cart() {
  const cartData = ["Tomato", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem title={cartData[0]} />
      <CartItem title={cartData[1]} />
      <Banner company="삼성카드" />
      <Banner company="현대카드" />
    </div>
  );
}

function Banner(props) {
  return <h5>{props.company} 결제 행사중</h5>;
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.title}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
