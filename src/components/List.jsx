
const myArray = ['apple', 'banana', 'orange'];
console.log(myArray);

function List () {
    const listItems = myArray.map(function mapItem(item){
        return (
            <li>{item}</li>
        );
    });

    return <ul>{listItems}</ul>;
 
}

export default List;