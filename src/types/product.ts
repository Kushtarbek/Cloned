export interface Product {
  brand?: string;
  category?: string;
  condition_details?: string;
  color?: string;
  country_of_origin?: string;
  created_by?: string;
  created_date?: string;
  description?: string;
  dimension_depth?: string;
  dimension_height?: string;
  dimension_width?: string;
  editing_changed_date?: string;
  editing_edit_requested_at?: string;
  editing_edit_requested_by?: string;
  editing_edit_approved_at?: string;
  editing_edit_approved_by?: string;
  editing_recondition_requested_at?: string;
  editing_recondition_requested_by?: string;
  editing_recondition_done_at?: string;
  editing_recondition_done_by?: string;
  editing_auth_requested_at?: string;
  editing_auth_requested_by?: string;
  editing_auth_approved_at?: string;
  editing_auth_approved_by?: string;
  editing_auth_rejected_at?: string;
  editing_auth_rejected_by?: string;
  editing_auth_authenticated_at?: string;
  editing_auth_authenticated_by?: string;
  editing_edit_lock_by?: string;
  editing_edited_by?: string;
  editing_edited_date?: string;
  editing_editorial?: string;
  editing_photo_status?: string;
  editing_photos_approved_date?: string;
  editing_photos_approved_by?: string;
  editing_photos_deployed_by?: string;
  editing_photos_deployed_date?: string;
  editing_photos_rejected_date?: string;
  editing_photos_rejected_by?: string;
  editing_photos_reject_reason?: string;
  editing_photos_taken_by?: string;
  editing_photos_taken_date?: string;
  editing_photos_requested_by?: string;
  editing_photos_requested_at?: string;
  editing_published_at?: string;
  editing_published_by?: string;
  editing_posted?: string;
  image_preview_url?: string;
  images: {
    Image_1: string;
    Image_2: string;
  };
  initial_listing_date: string;
  inventory_status?: string;
  item_style?: string;
  item_condition?: string;
  item_condition_type?: string;
  lifecycle_auth?: string;
  lifecycle_auth_request?: string;
  lifecycle_changed_date?: string;
  lifecycle_initial_listing_date?: string;
  lifecycle_inventory_audit_by?: string;
  lifecycle_inventory_audit_date?: string;
  lifecycle_inventory_removed_at?: string;
  lifecycle_inventory_status?: string;
  lifecycle_julia_log?: string;
  lifecycle_order_canceled_at?: string;
  lifecycle_order_canceled_on?: string;
  lifecycle_order_returned_at?: string;
  lifecycle_order_returned_on?: string;
  lifecycle_shipped?: string;
  lifecycle_sold?: string;
  lifecycle_sold_at?: string;
  lifecycle_sold_on?: string;
  lifecycle_stocked_at?: string;
  lifecycle_stocked_by?: string;
  lifecycle_stocking_status?: string;
  listing_price?: string;
  listing_snapshot: object;
  material?: string;
  original_price?: string;
  product_name?: string;
  secondary_sku?: string;
  seller_id?: string;
  serial_code?: string;
  sku?: string;
  sold?: string;
  sourcing_changed_date?: string;
  sourcing_inventory_entry_date?: string;
  sourcing_inventory_tracking?: string;
  sourcing_purchase_date?: string;
  sourcing_purchase_item_ID?: string;
  sourcing_purchasing_account?: string;
  sourcing_supplier_listing_link?: string;
  sourcing_purchasing_cost?: string;
  sourcing_supplier_selling_account?: string;
  sourcing_supplier_channel?: string;
  type?: string;
  sub_category?: string;
  department?: string;
  editing_edit_rejected_by?: string;
  editing_edit_rejected_at?: string;
  editing_edit_reject_reason?: string;
}

export interface Listing {
  poshmark_accounts: Account;
  shopify_accounts: Account;
  ebay_accounts: Account;
  mercari_accounts: Account;
  tradesy_accounts: Account;
  vestiaire_accounts: Account;
}

export interface Account {
  account_name?: string;
  channel?: string;
  comments?: string;
  errors?: string;
  id?: string;
  likes?: string;
  status?: string;
  changed_date: string;
  deleted_date: string;
  listing_date: string;
  listing_price: string;
  unlisting_date: string;
}

export type InventoryType = 'in_stock' | 'limited' | 'out_of_stock';

export interface Product1 {
  id: string;
  attributes: string[];
  category: string;
  createdAt: number;
  currency: string;
  image: string | null;
  inventoryType: InventoryType;
  isAvailable: boolean;
  isShippable: boolean;
  name: string;
  price: number;
  quantity: number;
  updatedAt: number;
  variants: number;
}
