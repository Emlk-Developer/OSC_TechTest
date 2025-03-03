import { Link } from 'react-router-dom'
import styled from 'styled-components';
import BasketItems from './BasketItems';

const HeaderTag = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  position: relative;
  gap: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
const HeaderTitle = styled.div`
  display: flex;
  gap: 10%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 480px) {
    justify-content: space-between;
    }
`
const HeaderNav = styled.ul`
  list-style: none;
  display: flex;
  gap: 10%;
  width: 100%;
  align-items: center;
  padding: 0 40px 0 0;

  li {
    font-size: 16px;
    color: var(--green);
    font-weight: 400;
  }

  @media (max-width: 480px) {
    justify-content: space-between;
    }
`

export default function Header() {

  return (
    <HeaderTag>
      <HeaderTitle>
        <Link to='/'>
          <h1>Mock Shop</h1>
        </Link>
      </HeaderTitle>
      <nav>
        <HeaderNav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/cart'>Basket</Link></li>
        </HeaderNav>
      </nav> 
      <BasketItems />
    </HeaderTag>
  )
}
