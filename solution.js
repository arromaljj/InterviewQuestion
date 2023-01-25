const getCustomerList = (sales) => {
  const _customerList = sales.map((s) => {
    return s.sales.map((d) => d.customerId);
  });
  const customerList = _customerList.reduce(
    (prev, curr) => [...prev, ...curr],
    []
  );
  const unique = new Set(customerList);
  return Array.from(unique);
};

const getAllSales = (sales) => {
  const allSales = sales
    .map((s) => s.sales)
    .reduce((prev, curr) => [...prev, ...curr], []);
  return allSales;
};

const getItemInfo = (info, itemId) => {
  const items = info.filter((f) => f.id == itemId);
  if (items.length > 0) {
    return items[0];
  }
  return null;
};

const aggregateSales = (customerList, sales, info) => {
  console.log(sales);
  return customerList.map((cid) => {
    const customerSales = sales.filter((s) => {
      return s.customerId == cid;
    });

    const uniqueItems = Array.from(new Set(customerSales.map((s) => s.itemId)));
    const agg = [];
    for (const itemId of uniqueItems) {
      const l = customerSales.filter((cs) => cs.itemId == itemId);
      const itemInfo = getItemInfo(info, itemId);
      if (itemInfo) {
        agg.push({
          qty: l.length,
          itemId,
          description: itemInfo.description,
          unitPrice: itemInfo.unitPrice,
          totalItemAmount: itemInfo.unitPrice * l.length,
        });
      } else {
        agg.push({
          err: "No data available",
        });
      }
    }

    return {
      customerId: cid,
      items: agg,
      totalBillAmount: agg
        .map((a) => a.totalItemAmount)
        .reduce((prev, curr) => prev + curr),
    };
  });
};

function solution(sales, info) {
  const customerList = getCustomerList(sales);
  const allSales = getAllSales(sales);
  const agg = aggregateSales(customerList, allSales, info);
  return agg;
}


