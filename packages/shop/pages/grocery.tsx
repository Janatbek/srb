import React from 'react';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import { withApollo } from 'helper/apollo';
import { SEO } from 'components/seo';
import Banner from 'containers/Banner/Banner';
import Products from 'containers/Products/Products';
import CartPopUp from 'containers/Cart/CartPopUp';
import {
  MainContentArea,
  ContentSection,
} from 'styled/pages.style';
// Static Data Import Here
import BannerImg from 'image/food.jpg';

const PAGE_TYPE = 'grocery';

function HomePage({ deviceType }) {
  const { query } = useRouter();
  const targetRef = React.useRef(null);
  React.useEffect(() => {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: 'smooth',
      });
    }
  }, [query]);

  return (
    <>
      {/*<SEO title='Grocery - Silk Road Bites' description='Grocery Details' />*/}
      <SEO title='Menu - Silk Road Bites' description='Menu Details' />
      <Modal>
        <Banner
          intlTitleId='groceriesTitle'
          intlDescriptionId='groceriesSubTitle'
          imageUrl={BannerImg}
        />

        {deviceType.desktop ? (
          <>
            <MainContentArea>
              <ContentSection>
                <div ref={targetRef}>
                  <Products
                    type={PAGE_TYPE}
                    deviceType={deviceType}
                    fetchLimit={16}
                  />
                </div>
              </ContentSection>
            </MainContentArea>
          </>
        ) : (
          <MainContentArea>
            <ContentSection style={{ width: '100%' }}>
              <Products
                type={PAGE_TYPE}
                deviceType={deviceType}
                fetchLimit={16}
              />
            </ContentSection>
          </MainContentArea>
        )}
        <CartPopUp deviceType={deviceType} />
      </Modal>
    </>
  );
}

export default withApollo(HomePage);
