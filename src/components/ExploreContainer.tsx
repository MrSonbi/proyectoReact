import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div id="container">
      <strong>{name}</strong>
      <p>Explore UI Components</p>

      <img src="/ranita.webp" alt="Una ranita" className="explore-img" />

      <table className="explore-table">
        <tbody>
          <tr><td>Fila 1 - Col 1</td><td>Fila 1 - Col 2</td></tr>
          <tr><td>Fila 2 - Col 1</td><td>Fila 2 - Col 2</td></tr>
          <tr><td>Fila 3 - Col 1</td><td>Fila 3 - Col 2</td></tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExploreContainer;
