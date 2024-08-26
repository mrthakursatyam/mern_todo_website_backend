import connection  from './data/database.js'
import {app} from './app.js'

connection()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port: ${process.env.PORT} in the ${process.env.NODE_ENV} Mode`);
    
})
// app.listen(3000)