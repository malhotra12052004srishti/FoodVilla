import Header from "../Header";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { MENU_DATA } from "../../mocks/data";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Add Items to the Cart", async () => {
  const menu = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
        <Cart />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(menu.getByTestId("menu")));
  const addBtn = menu.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[1]);

  const cart = menu.getByTestId("cart");
  expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart - 2 Items</a>");
});
