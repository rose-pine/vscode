import { getFruits } from "./helpers";

const Index = () => {
  const fruits = getFruits();

  return (
    <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li>
      ))}
    </ul>
  );
};

export default Index;
