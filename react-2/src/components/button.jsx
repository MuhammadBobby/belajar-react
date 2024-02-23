/* eslint-disable react/prop-types */
const btn = "bg-white p-3 border-2 border-slate-800 rounded-lg disabled:text-white disabled:bg-opacity-55 disabled:border-slate-300";

export default function Button({ func, text, number }) {
  if (number < 0 || number > 10) {
    return (
      <button disabled className={btn}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={func} className={btn}>
        {text}
      </button>
    );
  }
}
