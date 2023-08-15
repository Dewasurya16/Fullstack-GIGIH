## Mid Term Project GIGIH Fullstack Engineer

## Table Of Content

* [Database Structure](#database-structure)
	* [Videos Collection](#videos-collection)
	* [Comment Collection](#comment-collection)
* [API Structure](#api-structure)
* [API Request Response](#api-request-response)
* [How To Run](#how-to-run-in-local)

## Database Structure
This project have 2 collection, videos and comment. 

### Videos Collection

```
  {
    video_id: string
    thumbnail: string
    shop_name: string
    video_title: string
    product : [
      {
        nama_produk:  string
        harga_produk:  number
        thumbnail_produk:  string
        link_produk:  string
      }
    ]
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

## API Structure

Endpoint ready to use

```
GET   /
GET   /tokplay
GET   /tokplay/product
GET   /tokplay/comment
GET   /tokplay/{id}
POST  /tokplay/comment/post
```

## API Request Response

### GET /

----
Return json `message `
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
  message: 'API is running, you can use this API with /tokplay',
}
```

### GET /tokplay

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
      video_id,
      thumbnail,
      shop_name,
      video_title,
      product : [
        {
          nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
        }
      ]
    }
  ]
}
```


### GET /tokplay/:id

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
      product : [
        {
     	  nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
        }
      ]
    }
  ]
}
```


### GET /tokplay/product

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
    [
      {
          nama_produk,
          harga_produk,
          thumbnail_produk,
          link_produk
      }
    ]
  ]
}
```


### GET /tokplay/comment

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


### POST /tokplay/comment/post

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

## How To Run In Local

### Installation

This project use Node version 18.16

Make sure to install the dependencies:
```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install

```

### Development Server
Start the development server on http://localhost:3000

```
# yarn
yarn start

# npm
npm start

# pnpm
pnpm start
```
