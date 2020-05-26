import React, { useState } from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  PriceBox,
  NoProductMsg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
  ErrorMsg,
} from './CartItemCard.style';
import { CloseIcon } from 'components/AllSvgIcon';
import { ShoppingBagLarge } from 'components/AllSvgIcon';
import { CURRENCY } from 'helper/constant';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';

import { Scrollbars } from 'react-custom-scrollbars';
import { useCart } from 'contexts/cart/use-cart';
import { TextCartItem } from './CartItem/TextCartItem';

type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  onCloseBtnClick?: (e: any) => void;
  onCheckout?: (e: any) => void;
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const APPLY_COUPON = gql`
  mutation applyCoupon($code: String!) {
    applyCoupon(code: $code) {
      id
      code
      discountInPercent
    }
  }
`;

const FixedCart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
  onCheckout,
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
    applyCoupon,
  } = useCart();
  const [couponText, setCoupon] = useState('');
  const [displayCoupon, showCoupon] = useState(false);
  const [error, setError] = useState('');
  const [appliedCoupon] = useMutation(APPLY_COUPON);
  const { isRtl } = useLocale();

  const handleApplyCoupon = async () => {
    const { data }: any = await appliedCoupon({
      variables: { code: couponText },
    });
    if (data.applyCoupon && data.applyCoupon.discountInPercent) {
      setError('');
      applyCoupon(data.applyCoupon);
      setCoupon('');
    } else {
      setError('Invalid Coupon');
    }
  };

  const handleChange = (value: string) => {
    setCoupon(value);
  };

  const toggleCoupon = () => {
    showCoupon(true);
  };

  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {cartItemsCount}
            &nbsp;
            {cartItemsCount > 1 ? (
              <FormattedMessage id='cartItems' defaultMessage='items' />
            ) : (
              <FormattedMessage id='cartItem' defaultMessage='item' />
            )}
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick} className='fixedCartClose'>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbars
        universal
        autoHide
        autoHeight
        autoHeightMax={scrollbarHeight}
        renderView={(props) => (
          <div
            {...props}
            style={{
              ...props.style,
              marginLeft: isRtl ? props.style.marginRight : 0,
              marginRight: isRtl ? 0 : props.style.marginRight,
            }}
          />
        )}
      >
        <ItemWrapper className='items-wrapper'>
          {!!cartItemsCount ? (
            items.map((item) => (
              <TextCartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
                onRemove={() => removeItemFromCart(item)}
                data={item}
              />
            ))
          ) : (
            <NoProductMsg>
              <FormattedMessage
                id='noProductFound'
                defaultMessage='No products found'
              />
            </NoProductMsg>
          )}
        </ItemWrapper>
      </Scrollbars>

      <CheckoutButtonWrapper>
        {cartItemsCount !== 0 ? (
          <Link href='/checkout'>
            <CheckoutButton onClick={onCheckout}>
              <>
                <Title>
                  <FormattedMessage
                    id='navlinkCheckout'
                    defaultMessage='Checkout'
                  />
                </Title>
                <PriceBox>
                  {CURRENCY}
                  {calculatePrice()}
                </PriceBox>
              </>
            </CheckoutButton>
          </Link>
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <FormattedMessage
                  id='navlinkCheckout'
                  defaultMessage='Checkout'
                />
              </Title>
              <PriceBox>
                {CURRENCY}
                {calculatePrice()}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default FixedCart;
