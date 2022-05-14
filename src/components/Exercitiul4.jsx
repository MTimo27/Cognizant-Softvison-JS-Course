import React, { useEffect, useState } from 'react';

function Exercitiul4() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div className="border">
      {loading && <h1>Loading...</h1>}
      {!loading && <h1>Finished loading</h1>}
    </div>
  );
}

export default Exercitiul4;
