# Final Project Gigih 3.0 (Frontend Only)

# Feature
- Show all video list
- Show all product and comment by video
- Add new comment by video
# Backend
[Backend Repository](https://github.com/Shironim/MidTermProject)

## Database Structure
This project have 3 collection, videos, comment and product. 

### Videos Collection

```
  {
    video_id: string
    thumbnail: string
    shop_name: string
    video_title: string
  }
 ```

### Comment Collection

```
{
  videoId :  string
  username :  string
  comment :  string
}
```

### Product Collection

```
{
  videoId :  string
  nama_produk:  string
  harga_produk:  number
  thumbnail_produk:  string
  link_produk:  string
}
```

## API Structure

Endpoint ready to use

```
GET   /
GET   /product
GET   /comment
GET   /{id}
POST  /comment/post
POST  /product/post
```

## API Request Response

### GET /


### GET /

----
Return all videos from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
      nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
    }
  ]
}
```


### GET /:id

----
Return videos associated with the specified id.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
      video_id,
      thumbnail,
      shop_name,
      video_title,
      products : [
        {
          videoId,
          nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
        }
      ]
      comment : [
        {
          videoId,
          username,
          comment
        }
      ]
    }
  ]
}
```


### GET /product

----
Return all product from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
      videoId,
      nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
    }
  ]
}
```


### GET /comment

----
Return all comment from databases.
* **URL Params**  
  None
* **Data Params**  
  None
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  result : [
    {
      videoId,
      username,
      comment
    }
  ]
}
```


### POST /comment/post

----
Creates a new Comment and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId :  string
    username :  string
    comment :  string
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: "Comment added successfully",
  data : {
    username,
    comment
  }
}
```
### POST /product/post

----
Creates a new Product and returns the new object.
* **URL Params**  
  None
* **Data Params**  
  ```
  {
    videoId :  string
     nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
  }
  ```
* **Headers**  
  Content-Type: application/json  
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  message: "Product added successfully",
  data : {
    product_name,
    price_product
  }
}
```

## How To Run In Local

### Installation
This project use Node version 18.16
## Install Frontend Project
Make sure to install the dependencies:
```
npm install
```
## Install Backend Project

Make sure to install the dependencies from [this repo](https://github.com/Shironim/MidTermProject):
```
npm install
```

### Start Server Frontend
Start the development server on http://localhost:5173

```
npm run dev
```
### Start Server Backend
Start the development server on http://localhost:3000

```
npm run start
```
