function handleClick() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

export default function ButtonGetScootin() {
  return (
    <button onClick={handleClick} className="buttonType1" type="button">
      Get Scootin
    </button>
  );
}
