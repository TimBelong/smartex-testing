const tree = {
    value: 3,
    children: [
        {
            value: 1,
            children: []
        },
        {
            value: 4,
            children: []
        },
        {
            value: 3,
            children: [
                {
                    value: 8,
                    children: [
                        {
                            value: 2,
                            children: []
                        },
                        {
                            value: 5,
                            children: []
                        }
                    ]
                },
                {
                    value: 0,
                    children: []
                }
            ]
        }
    ]
};

function sumEvenValues(node) {
    let sum = 0;
    
    if (node.value % 2 === 0) {
        sum += node.value;  
    }

    if (node.children) {
        for (let child of node.children) {
            sum += sumEvenValues(child);
        }
    }

    return sum;
}

const result = sumEvenValues(tree);
console.log(result); 
