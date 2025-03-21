/**
 * Request parameters for buying a contract
 */
export interface BuyContractRequest {
    instrument_id: string;
    trade_type: string;
    duration: string;
    amount: number;
    currency: string;
    price?: number;
    // Add other buy parameters as needed
}

/**
 * Response from buy contract API
 */
export interface BuyContractResponse {
    contract_id: string;
    price: number;
    // Add other buy response properties as needed
}

/**
 * Request parameters for selling a contract
 */
export interface SellContractRequest {
    contract_id: string;
    price?: number;
}

/**
 * Response from sell contract API
 */
export interface SellContractResponse {
    contract_id: string;
    price: number;
    profit: number;
    // Add other sell response properties as needed
}

// Response structure for open contracts
export interface OpenContractsResponse {
    data: {
        contracts: Array<{
            contract_id: string;
            product_id: string;
            contract_details: ContractDetails;
        }>;
    };
}

// Response structure for closed contracts
export interface ClosedContractsResponse {
    data: {
        contracts: Array<{
            contract_id: string;
            product_id: string;
            contract_details: ContractDetails;
        }>;
        pagination: {
            current_page: number;
            limit: number;
            total_items: number;
            total_pages: number;
        };
    };
}

// Common contract details structure
export interface ContractDetails {
    allow_equals: boolean;
    barrier: string;
    bid_price: string;
    bid_price_currency: string;
    contract_expiry_time: number;
    contract_start_time: number;
    duration: number;
    duration_unit: string;
    entry_spot: string;
    entry_tick_time: number;
    exit_spot: string;
    exit_tick_time?: number;
    exit_time?: number;
    instrument_id: string;
    instrument_name: string;
    is_expired: boolean;
    is_sold: boolean;
    is_valid_to_sell: boolean;
    potential_payout: string;
    profit_loss: string;
    reference_id: string;
    stake: string;
    variant: string;
    buy_tick_id?: number;
    pricing_tick_id?: string;
    sell_tick_id?: number;
    tick_stream: Array<{
        ask: string;
        bid: string;
        epoch_ms: number;
        price: string;
    }>;
}

// Simplified contract type for UI display
export interface Contract {
    contract_id: string;
    product_id: string;
    details: ContractDetails;
}
