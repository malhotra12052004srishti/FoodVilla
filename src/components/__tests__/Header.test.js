import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
// This static-router is a relacement of createRouterBrowser and this router can work without browser

test("Logo should load on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  //   console.log(header);

  // Check if logo is loaded
  const logo = header.getAllByTestId("logo");
  //   console.log(logo[0]);
  //   logo was returning the array because of getAllByTestID and we needed to access the 1st element only so using indexing
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  // Check if online status is green
  const onlineStatus = header.getByTestId("online-status");
  //   Here we are not using indexing. Instead, we are using getByTestId
  expect(onlineStatus.innerHTML).toBe("✔️");
});

test("Cart should have 0 items on rendering header", () => {
  // Load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  // Check if cart is empty
  const cart = header.getByTestId("cart");
  //   Here we are not using indexing. Instead, we are using getByTestId
  expect(cart.innerHTML).toBe("<a href=\"/cart\">Cart - 0 Items</a>");
});

// "id" is recognised by the browser but the "data-testid" is recognised by the jest


// The testcases might seem similar but they are testing the different portions of the header: 
// 1. The logo : It is testing the mocks/dummy, whether the png image is rendering correctly or not.

// 2. The online status : It is checking my useOnline hook. If the hook made any of the mistake then the status would have become red and would not pass the testcase.

// 3. The cart items : It is checking the useSelector working properly or not, whether the store was setup properly or not, whether the component header is subscribing the store properly or not and if somehow some other component broke our store the testcase will fail and we will able to find the errors easily.


// You can write the 3 testcase conditions under one header rendering but it is suggested to render the header again and write it refreshingly for a clear distinction

// What is stored in that jsdom ? 
// The html is stored there and you can get to know about that when you will misspell the id name here in the file for eg:  const cart = header.getByTestId("cart1");
// When we will run the test cases then the jsdom will display that html and it will show that there is no element with the id "cart1" and it will display the error message. It is really helpful in debugging

// This was all about unit testing
