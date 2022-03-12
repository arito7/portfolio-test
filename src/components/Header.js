import { GitHub } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <Box className="portfolio-name">
        <img src="../assets/portfolio-placeholder.jpg" alt="" />
        <Typography>Yuji Takamatsu</Typography>
      </Box>
      <Box className="portfolio-desc">
        <Typography>About Me</Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          quaerat facilis vel illo pariatur dolore natus quos aut! Alias tenetur
          a quam reprehenderit amet ducimus aspernatur maxime ut nesciunt
          consequatur. Autem voluptas adipisci quod asperiores deleniti libero
          alias impedit labore sint eos neque obcaecati enim consectetur earum
          repellat animi eius, fugiat reprehenderit porro ullam eligendi
          temporibus.
        </Typography>
        <Box style={{ display: 'grid', justifyContent: 'end' }}>
          <GitHub />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
