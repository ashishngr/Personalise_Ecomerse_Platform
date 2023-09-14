import React from 'react'
import {useNavigate} from 'react-router-dom';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon,  } from "@heroicons/react/24/solid";
import { PlusSmallIcon } from "@heroicons/react/24/solid";


import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react"; 

const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];
const TABLE_HEAD = ["Image", "Name", "Price", "Quantitiy", "Category", "Tags", "Return Policy", "State", "Description", ""]; 

const TABLE_ROWS = [
    {
        image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", 
        name: "Phone", 
        price: "10000", 
        quantitiy: 10, 
        category: "electronics", 
        tags: "Smart Phone", 
        return_policy: "7", 
        state: "New", 
        description: "6.1 inch smart phone | black in color| liquid ratina display | Latest Android", 
    }, 
    {
        image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", 
        name: "Phone", 
        price: "10000", 
        quantitiy: 10, 
        category: "electronics", 
        tags: "Smart Phone", 
        return_policy: "7", 
        state: "New", 
        description: "6.1 inch smart phone | black in color| liquid ratina display | Latest Android", 
    }, 
    {
        image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", 
        name: "Phone", 
        price: "10000", 
        quantitiy: 10, 
        category: "electronics", 
        tags: "Smart Phone", 
        return_policy: "7", 
        state: "New", 
        description: "6.1 inch smart phone | black in color| liquid ratina display | Latest Android", 
    }, 
    {
        image: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg", 
        name: "Phone", 
        price: "10000", 
        quantitiy: 10, 
        category: "electronics", 
        tags: "Smart Phone", 
        return_policy: "7", 
        state: "New", 
        description: "6.1 inch smart phone | black in color| liquid ratina display | Latest Android", 
    }
]

const ProductList = () => {
    const navigate = useNavigate(); 

const handleClick = (e) => {
    e.preventDefault(); 
    navigate("/admin/product/add")
}
const getTextWithWordBreak = ({text}) => {
    return `<div style="wordBreak: break-word">${text}</div>`;
  };

  return (
       <Card className="h-full w-full mt-20 ml-10 mb-20">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        Products list
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        See information about ypur products
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Button className="flex items-center gap-3" size="sm">
                        <PlusSmallIcon strokeWidth={2} className="h-4 w-4" /> Add Product
                    </Button>
                </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="w-full md:w-72">
                    <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                    />
                </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
                <tr>
                {TABLE_HEAD.map((head) => (
                    <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                    <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                    >
                        {head}
                    </Typography>
                    </th>
                ))}
                </tr>
            </thead>
                <tbody>
                    {TABLE_ROWS.map(
                    ({ image, name, price, quantitiy, category, tags, return_policy , state, description }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";
        
                        return (
                        <tr key={name}>
                            <td className={classes}>
                            <div className="flex items-center gap-3">
                                <Avatar src={image} alt={image} size="sm" />
                            </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {name}
                                    </Typography>
                                </div>
                            </td> 
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {price}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {quantitiy}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {category}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {tags}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {return_policy}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col">
                                    <Typography 
                                    className='font-normal' 
                                    variant="small"
                                    color="blue-gray">
                                        {state}
                                    </Typography>
                                </div>
                            </td>
                            <td className={classes}>
                                <div className="flex flex-col h-20 w-48">
                                    <Typography 
                                    className='font-normal break-words' 
                                    variant="small"
                                    color="blue-gray" 
                                    >
                                       {description}
                                    </Typography>
                                </div>
                            </td>
                          
                            <td className={classes}>
                            <Tooltip content="Edit Product">
                                <IconButton variant="text">
                                <PencilIcon className="h-4 w-4" />
                                </IconButton>
                            </Tooltip>
                            </td>
                            
                        </tr>
                        );
                    },
                    )}
                </tbody>
            </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                <Button variant="outlined" size="sm">
                    Previous
                </Button>
                <Button variant="outlined" size="sm">
                    Next
                </Button>
                </div>
            </CardFooter>
       </Card>
  )
}

export default ProductList