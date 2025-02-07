```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <View>
      <Text>{data?.name ?? 'Loading...'}</Text> {/* Safe Access */}
    </View>
  );
};

export default MyComponent;
```

This solution uses optional chaining (`data?.name`) which will return `undefined` if `data` is null or undefined.  The nullish coalescing operator (`?? 'Loading...'`) then provides a default value ('Loading...') if `data?.name` is null or undefined preventing the error.