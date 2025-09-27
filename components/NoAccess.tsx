import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Logo from "./Logo";

const NoAccess = () => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-100 p-4">
      <Card>
        <CardHeader>
          <Logo />
          <CardTitle>Welcome Back</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default NoAccess;
