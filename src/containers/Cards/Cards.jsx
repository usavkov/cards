import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { CardList } from "../../components/CardsList";
import { ModalForm } from "../../components/Modal";
import { Form } from "../Form";
import { initialValues } from "../../utils";
import { validate } from "../../utils/validate";
import { Input } from "antd";

export const Cards = () => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const removeCard = (id) => {
    setCards((cards) => cards.filter((card) => card.id !== id));
  };

  const addCard = (values) => (evt) => {
    evt.preventDefault();
    const newCard = {
      id: Math.ceil(Math.random() * 100),
      name: values.fullName,
      username: "Bret",
      email: "dqwdqwdqwdqwdqwdqwdqwdqwd"
    };

    setCards((state) => [...state, newCard]);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setCards(data);
        setIsLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <ModalForm>
        <Form initialValues={initialValues} validate={validate}>
          {({ values, errors, handleChange, isValid, handleFocus }) => {
            return (
              <form onSubmit={addCard(values)}>
                <Input
                  placeholder="ImageUrl"
                  name="url"
                  onChange={handleChange}
                  onFocus={handleFocus}
                  value={values.url}
                />
                <span>Text</span>
                <Input
                  placeholder="fullName"
                  name="fullName"
                  onChange={handleChange}
                  value={values.fullName}
                />
                <span>{errors.fullName}</span>
                <Input
                  type={"number"}
                  placeholder="price"
                  name="price"
                  onChange={handleChange}
                  value={values.price}
                />
                <select value={values.gender} onChange={handleChange}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <button disabled={isValid}>Submit</button>
              </form>
            );
          }}
        </Form>
      </ModalForm>
      <CardList
        cards={cards}
        isLoading={isLoading}
        error={error}
        onClick={removeCard}
      />
    </>
  );
};
