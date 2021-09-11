const users = [
  { id: 1, name: 'Lathifa', address: 'Surabaya' },
  { id: 2, name: 'Hasna', address: 'Depok' },
  { id: 3, name: 'Wisnu', address: 'Bojonegoro' },
  { id: 4, name: 'Rizqi', address: 'Kediri' },
];

const ListRendering = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{`${user.name} - ${user.address}`}</li>
      ))}
    </ul>
  );
};

export default ListRendering;
