import React from 'react';
import Router from 'next/router';
import { closeModal } from '@redq/reuse-modal';
import Button from 'components/Button/Button';
import {
  QuickViewWrapper,
  ProductDetailsWrapper,
  ProductPreview,
  ProductInfoWrapper,
  ProductInfo,
  ProductTitlePriceWrapper,
  ProductTitle,
  ProductWeight,
  ProductDescription,
  ProductCartWrapper,
  ProductPriceWrapper,
  ProductPrice,
  ProductCartBtn,
  ModalClose,
} from './QuickView.style';
import { CURRENCY } from 'helper/constant';
import { CloseIcon, CartIcon } from 'components/AllSvgIcon';
import ReadMore from 'components/Truncate/Truncate';
import CarouselWithCustomDots from 'components/MultiCarousel/MultiCarousel';
import { useCart } from 'contexts/cart/use-cart';
import { Counter } from 'components/Counter/Counter';

type QuickViewProps = {
  modalProps: any;
  deviceType: any;
  onModalClose: any;
};

const QuickView: React.FunctionComponent<QuickViewProps> = ({
  modalProps,
  deviceType,
  onModalClose,
}) => {
  const { addItem, removeItem, isInCart, getItem } = useCart();
  const {
    id,
    title,
    unit,
    price,
    description,
    gallery,
  } = modalProps;

  const handleAddClick = (e: any) => {
    e.stopPropagation();
    addItem(modalProps);
  };

  const handleRemoveClick = (e: any) => {
    e.stopPropagation();
    removeItem(modalProps);
  };
  return (
    <>
      <ModalClose onClick={onModalClose}>
        <CloseIcon />
      </ModalClose>
      <QuickViewWrapper>
        <ProductDetailsWrapper className='product-card' dir='ltr'>
          <ProductPreview>
            <CarouselWithCustomDots items={gallery} deviceType={deviceType} />
          </ProductPreview>
          <ProductInfoWrapper dir='ltr'>
            <ProductInfo>
              <ProductTitlePriceWrapper>
                <ProductTitle>{title}</ProductTitle>
                <ProductPriceWrapper>
                  <ProductPrice>
                    {CURRENCY}
                    {price}
                  </ProductPrice>
                </ProductPriceWrapper>
              </ProductTitlePriceWrapper>

              <ProductWeight>{unit}</ProductWeight>
              <ProductDescription>
                <ReadMore character={600}>{description}</ReadMore>
              </ProductDescription>

              <ProductCartWrapper>
                <ProductCartBtn>
                  {!isInCart(id) ? (
                    <Button
                      title='Cart'
                      intlButtonId='addCartButton'
                      iconPosition='left'
                      colors='primary'
                      size='small'
                      variant='outlined'
                      className='cart-button'
                      icon={<CartIcon />}
                      onClick={handleAddClick}
                    />
                  ) : (
                    <Counter
                      value={getItem(id).quantity}
                      onDecrement={handleRemoveClick}
                      onIncrement={handleAddClick}
                    />
                  )}
                </ProductCartBtn>
              </ProductCartWrapper>
            </ProductInfo>
          </ProductInfoWrapper>
        </ProductDetailsWrapper>
      </QuickViewWrapper>
    </>
  );
};

export default QuickView;
