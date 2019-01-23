import React from "react";
import styled from "styled-components";

const Snapper = styled.div`
  height: 85vh;
  background-color: rgb(
    ${() => Math.floor(Math.random() * 255)},
    ${() => Math.floor(Math.random() * 255)},
    ${() => Math.floor(Math.random() * 255)}
  );
`;

export default class App extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  render() {
    
    return (
      <>
        <Snapper>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque quibusdam sed dolore eligendi, dicta earum culpa ratione corrupti quasi, eum perferendis beatae quam consequatur temporibus dignissimos? Laudantium officiis, tempora quibusdam fugit rem nesciunt deleniti amet, expedita atque minima velit, numquam totam voluptas soluta nobis! Tempore possimus voluptatem harum ex?</p>
        </Snapper>
        <Snapper>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque quibusdam sed dolore eligendi, dicta earum culpa ratione corrupti quasi, eum perferendis beatae quam consequatur temporibus dignissimos? Laudantium officiis, tempora quibusdam fugit rem nesciunt deleniti amet, expedita atque minima velit, numquam totam voluptas soluta nobis! Tempore possimus voluptatem harum ex?</p>
        </Snapper>
        <Snapper>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque quibusdam sed dolore eligendi, dicta earum culpa ratione corrupti quasi, eum perferendis beatae quam consequatur temporibus dignissimos? Laudantium officiis, tempora quibusdam fugit rem nesciunt deleniti amet, expedita atque minima velit, numquam totam voluptas soluta nobis! Tempore possimus voluptatem harum ex?</p>
        </Snapper>
        <Snapper>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque quibusdam sed dolore eligendi, dicta earum culpa ratione corrupti quasi, eum perferendis beatae quam consequatur temporibus dignissimos? Laudantium officiis, tempora quibusdam fugit rem nesciunt deleniti amet, expedita atque minima velit, numquam totam voluptas soluta nobis! Tempore possimus voluptatem harum ex?</p>
        </Snapper>
        <Snapper>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet doloremque quibusdam sed dolore eligendi, dicta earum culpa ratione corrupti quasi, eum perferendis beatae quam consequatur temporibus dignissimos? Laudantium officiis, tempora quibusdam fugit rem nesciunt deleniti amet, expedita atque minima velit, numquam totam voluptas soluta nobis! Tempore possimus voluptatem harum ex?</p>
        </Snapper>
      </>
    );
  }
}
