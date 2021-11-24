export type OrderItem = {
    item_id: number,
    quantity: number,
}

export type Order = {
    items: Array<OrderItem>,
    address_uuid: string
}