// function Message() {
//     return <h1>Hello World</h1>;
// }

const Message = () => {
  const name = "Jessica";
  return <h1>Hello {name ? name : "World"}</h1>;
};
export default Message;
