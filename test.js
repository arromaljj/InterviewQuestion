const itemInfo = [
  {
    id: 100201,
    description: "SOAP",
    unitPrice: 3,
  },
  {
    id: 100202,
    description: "BREAD",
    unitPrice: 4,
  },
  {
    id: 100203,
    description: "EGGS",
    unitPrice: 5,
  },
  {
    id: 100204,
    description: "APPLE",
    unitPrice: 2,
  },
];

const data = [
  {
    storeId: 192993,
    purchaseDate: "01/05/2022",
    sales: [
      {
        customerId: 1,
        itemId: 100201,
      },
      {
        customerId: 2,
        itemId: 100202,
      },
      {
        customerId: 1,
        itemId: 100202,
      },
      {
        customerId: 3,
        itemId: 100204,
      },
      {
        customerId: 3,
        itemId: 100204,
      },
      {
        customerId: 2,
        itemId: 100203,
      },
      {
        customerId: 3,
        itemId: 100203,
      },
      {
        customerId: 5,
        itemId: 100201,
      },
      {
        customerId: 5,
        itemId: 100204,
      },
    ],
  },
];

const result = [
  {
    customerId: 1,
    items: [
      {
        qty: 1,
        itemId: 100201,
        description: "SOAP",
        unitPrice: 3,
        totalItemAmount: 3,
      },
      {
        qty: 1,
        itemId: 100202,
        description: "BREAD",
        unitPrice: 4,
        totalItemAmount: 4,
      },
    ],
    totalBillAmount: 7,
  },
  {
    customerId: 2,
    items: [
      {
        qty: 1,
        itemId: 100202,
        description: "BREAD",
        unitPrice: 4,
        totalItemAmount: 4,
      },
      {
        qty: 1,
        itemId: 100203,
        description: "EGGS",
        unitPrice: 5,
        totalItemAmount: 5,
      },
    ],
    totalBillAmount: 9,
  },
  {
    customerId: 3,
    items: [
      {
        qty: 2,
        itemId: 100204,
        description: "APPLE",
        unitPrice: 2,
        totalItemAmount: 4,
      },
      {
        qty: 1,
        itemId: 100203,
        description: "EGGS",
        unitPrice: 5,
        totalItemAmount: 5,
      },
    ],
    totalBillAmount: 9,
  },
  {
    customerId: 5,
    items: [
      {
        qty: 1,
        itemId: 100201,
        description: "SOAP",
        unitPrice: 3,
        totalItemAmount: 3,
      },
      {
        qty: 1,
        itemId: 100204,
        description: "APPLE",
        unitPrice: 2,
        totalItemAmount: 2,
      },
    ],
    totalBillAmount: 5,
  },
];

module.exports = {
  itemInfo,
  data,
  result,
};
