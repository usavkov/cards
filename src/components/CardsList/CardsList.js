import React from "react";
import { Card, Button } from "antd";
import "./CardList.css";
import { withError } from "../../HOC/withError";
import { withLoading } from "../../HOC/withLoading";
import { compose } from "../../utils/compose";
const { Meta } = Card;

const CardListUI = ({ cards, onClick }) => {
  return (
    <div className="container">
      {cards.map(({ id, name, website }) => {
        return (
          <Card
            key={id}
            hoverable
            cover={
              <img
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta title={name} description={website} />
            <Button icon="&#10007;" onClick={() => onClick(id)} />
          </Card>
        );
      })}
    </div>
  );
};

export const CardList = compose(withError, withLoading)(CardListUI);

// withError(withLoading(CardListUI))
