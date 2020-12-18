import React from 'react';
import { Button } from '../../globalStyles';

import { IoGameControllerOutline, IoSpeedometerOutline } from 'react-icons/io5';
import { GoBrowser } from 'react-icons/go'

import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Nosso Planos</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GoBrowser />
                </PricingCardIcon>
                <PricingCardPlan>100 MEGA</PricingCardPlan>
                <PricingCardCost>R$99.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Assista filmes,</PricingCardFeature>
                  <PricingCardFeature>escute suas músicas e faça</PricingCardFeature>
                  <PricingCardFeature>downloads diversos.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contrate já</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoGameControllerOutline />
                </PricingCardIcon>
                <PricingCardPlan>300 MEGA</PricingCardPlan>
                <PricingCardCost>R$169.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Streamings,</PricingCardFeature>
                  <PricingCardFeature>jogos online </PricingCardFeature>
                  <PricingCardFeature>e download mais rápidos.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contrate já</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <IoSpeedometerOutline />
                </PricingCardIcon>
                <PricingCardPlan>500 MEGA</PricingCardPlan>
                <PricingCardCost>R$299.99</PricingCardCost>
                <PricingCardLength>por mês</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Para quem quer</PricingCardFeature>
                  <PricingCardFeature>o máximo de velocidade</PricingCardFeature>
                  <PricingCardFeature>em toda a casa.</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Contrate já</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;