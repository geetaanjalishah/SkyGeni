import { useEffect, useState } from "react";
import { getRecommendations } from "../api/api";
import { Card, CardContent, List, ListItem } from "@mui/material";

export default function Recommendations() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    getRecommendations().then((res) => setItems(res.data));
  }, []);

  return (
    <Card>
      <CardContent>
        <div className="recommendation-title">Recommendations</div>
        <List>
          {items.map((item, i) => (
            <ListItem key={i}>
              <span className="recommendation-dot">▲</span>
              {item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
