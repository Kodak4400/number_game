terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.3.0"
    }
  }
}

provider "google" {
  credentials = file("../account.json")

  project = "kodak-287815"
  region  = "asia-northeast1"
  zone    = "asia-northeast1-a"
}

# resource "google_compute_network" "vpc_network" {
#   name = "terraform-network"
# }

# FireStoreのIndex
# resource "google_firestore_index" "number_game_index" {
#   collection = "ranking"

#   fields {
#     field_path = "name"
#     order      = "DESCENDING"
#   }

#   fields {
#     field_path = "score"
#     order      = "ASCENDING"
#   }
# }

# Cloud Functionsのzip化
data "archive_file" "function_archive" {
  type        = "zip"
  source_dir  = "dist/functions"
  output_path = "zip/functions.zip"
}

# ZIP化したファイルをGoogle Cloud StorageにアップロードするBucket
resource "google_storage_bucket" "functions_bucket" {
  name     = "cloud-functions-backet"
  location = "asia-northeast1"
}

# ZIP化したファイルをGoogle Cloud Storageにアップロード
resource "google_storage_bucket_object" "functions_packages" {
  name   = "app/functions-${data.archive_file.function_archive.output_md5}.zip"
  bucket = google_storage_bucket.functions_bucket.name
  source = data.archive_file.function_archive.output_path
}

# Cloud Functionsの作成
resource "google_cloudfunctions_function" "function" {
  name        = "sample-function"
  description = "terraform deploy test"
  runtime     = "nodejs16"
  available_memory_mb   = 128
  source_archive_bucket = google_storage_bucket.functions_bucket.name
  source_archive_object = google_storage_bucket_object.functions_packages.name
  timeout               = 10
  entry_point           = "helloGET"
  trigger_http          = true
}

# Cloud FunctionsのIAM権限を設定
# resource "google_cloudfunctions_function_iam_member" "invoker" {
#   project        = google_cloudfunctions_function.function.project
#   region         = google_cloudfunctions_function.function.region
#   cloud_function = google_cloudfunctions_function.function.name

#   role   = "roles/cloudfunctions.invoker"
#   member = "allUsers"
# }
