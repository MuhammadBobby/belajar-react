/* eslint-disable react/prop-types */

const text = "text-center text-lg font-bold mt-8";

export default function Counter({ number }) {
  if (number < 0 || number > 10) {
    return <h2 className={text}> Done! </h2>;
  } else {
    return <h2 className={text}> {number} </h2>;
  }
}
