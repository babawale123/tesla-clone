import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                Description = "Order Online for Touchless Delivery"
                backgroundImg="Model-s.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model Y"
                Description = "Order Online for Touchless Delivery"
                backgroundImg="Model-y.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model 3"
            Description = "Order Online for Touchless Delivery"
            backgroundImg="Model-3.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
            />
            <Section
            title="Model X"
            Description = "Order Online for Touchless Delivery"
            backgroundImg="Model-x.jpg"
            leftBtnText="Custom order"
            rightBtnText="Existing Inventory"
            />

            <Section 
            title="Lower Cost Solar Panels in America"
            Description = "Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            
            />

            <Section 
            title="Solar for New Roof"
            Description = "Solar Roof Costs Less Than a Roof"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
            
            />

            <Section 
            title="Accessories"
            Description = ""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
            rightBtnText=""
            
            />
           
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;

`; 


